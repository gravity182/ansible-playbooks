# Port Forwarding

Here I'll briefly describe how to connect to any service on any port without exposing this port publicly. Technically, it's called *port forwarding* or *SSH tunnel*.

For instance, qBittorrent is open on the port `5000` by default.
To create a reliable and auto-recovering SSH tunnel execute the following command locally:
```shell
autossh -M 0 -f -T -N -o "ServerAliveInterval 120" -o "ServerAliveCountMax 3" -L 5000:localhost:5000 {{ host_or_alias }}
```

Let's clarify what's happening here:
- `-M 0` - disables the monitoring function. Instead we'll use `ServerAliveInterval` and `ServerAliveCountMax`
- `-f` - causes autossh to drop to the background before running ssh. This will allow us to continue working in a terminal without breaking the tunnel
- `-T` - disables pseudo-terminal allocation. We don't need PTY since we only use SSH for port forwarding
- `-N` - do not execute a remote command. This is useful for just forwarding ports
- `-o "ServerAliveInterval 120"` - keeps the SSH tunnel alive by sending a message every N seconds
- `-o "ServerAliveCountMax 3"` - the number of server alive messages which may be sent without ssh receiving any messages back from the server. If this threshold is reached, the SSH tunnel will be terminated
- `-L 5000:localhost:5000` - bind address. Follows the following scheme: `localport:host:hostport`

Furthermore, you can configure your ssh config as follows:
```text
Host {{ alias }}
    // HostName, Port, User, IdentityFile...
    LocalForward 5000 localhost:5000
    ServerAliveInterval 120
    ServerAliveCountMax 3
```

Which will allow you to create a tunnel simply via:

```shell
autossh -M 0 -f -T -N {{ alias }}
```

You can close the tunnel by killing all of the autossh processes or only the processes for the specified host:

```shell
pkill -e autossh # kill all
pkill -e -f "autossh.*localhost.*{{ host_or_alias }}" # kill for the specified host only
```
