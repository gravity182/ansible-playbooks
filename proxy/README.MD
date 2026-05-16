# Tinyproxy Playbook

What it does:

1. Installs [Tinyproxy](https://tinyproxy.github.io/)
2. Configures a public HTTP/HTTPS forward proxy with generated BasicAuth credentials
3. Opens the proxy port in UFW firewall
4. Adds a systemd hardening override
5. Registers it as a systemd service

The proxy listens on port `58080` by default. The port can be changed via the `tinyproxy_port` variable.

## Quickstart

Prerequisites:

1. Debian/Ubuntu server
2. SSH keys-based login available
    - for the password-based login add `--ask-pass` flag when running the playbook
3. The *ansible_user* has sudo privileges
4. Ansible `community.general` collection installed locally

Set up your inventory config `inventory.yml`:

```yaml
all:
   hosts:
      remotehost:
         ansible_connection: ssh
         ansible_host: <host> # set host (either IP or alias)
         ansible_user: <user> # set user
         ansible_port: 22
         ansible_ssh_private_key_file: ~/.ssh/<ssh_private_key_filename> # set SSH private key filename
```

Run the playbook:

```shell
ansible-playbook -i inventory.yml --ask-become-pass proxy.yml
```

On the run you'll be asked for the password of the user, which is required for obtaining sudo privileges.

## Credentials

The playbook generates credentials automatically on the first run and reuses them on later runs.

Retrieve them on the server:

```shell
sudo cat /etc/tinyproxy/credentials
```

The file contains:

```yaml
username: <generated_username>
password: <generated_password>
```

You can provide credentials explicitly:

```shell
ansible-playbook -i inventory.yml --ask-become-pass proxy.yml \
  -e tinyproxy_username=<username> \
  -e tinyproxy_password=<password>
```

Provided credentials must not contain whitespace.

## Client Usage

Use the generated username and password:

```shell
export http_proxy=http://<username>:<password>@<server>:58080
export https_proxy=http://<username>:<password>@<server>:58080
curl https://example.com/
```

Or pass the proxy directly:

```shell
curl --proxy http://<username>:<password>@<server>:58080 https://example.com/
```

## Security Notes

This playbook intentionally creates a public proxy protected by BasicAuth. Tinyproxy does not provide native TLS for the client-to-proxy connection, so the BasicAuth exchange itself is not TLS-protected by Tinyproxy. Use strong generated credentials, keep the server updated, and avoid reusing these credentials anywhere else.

The default configuration restricts `CONNECT` to port `443` only. Override it if you need additional ports:

```shell
ansible-playbook -i inventory.yml --ask-become-pass proxy.yml \
  -e '{"tinyproxy_connect_ports":["443","563"]}'
```

## Variables

- `tinyproxy_port` - proxy TCP port, default `58080`
- `tinyproxy_listen_address` - listen address, default `0.0.0.0`
- `tinyproxy_max_clients` - maximum simultaneous clients, default `100`
- `tinyproxy_connect_ports` - allowed `CONNECT` target ports, default `["443"]`
- `tinyproxy_username` - optional explicit username
- `tinyproxy_password` - optional explicit password
