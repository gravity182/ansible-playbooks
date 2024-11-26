# qBittorrent Playbook

What it does:

1. Installs [qBittorrent-nox](https://github.com/qbittorrent/qBittorrent)
2. Registers it as a system-wide systemd service

The WebUI is accessible on the `5000` port. The port can be changed via the `webui_port` variable.
Alternatively, the port can be changed from the WebUI itself.

You can connect to your qBittorrent instance without exposing the WebUI port publicly. Please see instructions on [Port Forwarding](../docs/PortForwarding.md).

## Quickstart

Prerequisites:

1. Python3 installed on the server
2. SSH keys-based login available for the *ansible_user*
    - for the password-based login add `--ask-pass` flag when running the playbook
3. The *ansible_user* has sudo privileges

Set up your inventory config `inventory.yml`:

```yaml
all:
   hosts:
      remotehost:
         ansible_connection: ssh
         ansible_host: <host> # set host (either IP or alias)
         ansible_user: <user> # set user for whom qBittorrent should be installed
         ansible_port: 22
         ansible_ssh_private_key_file: ~/.ssh/<ssh_private_key_filename> # set SSH private key filename
```

The user you set in the `ansible_user` var will be used for installing qBittorrent.

Run the playbook:

```shell
ansible-playbook -i inventory.yml --ask-become-pass qbittorrent.yml
```

On the run you'll be asked for the password of the user, which is required for obtaining sudo privileges.

### WebUI creds

The username is `admin.`

A random password is generated on the first run. You can retrieve it from the logs:
```sh
journalctl -u qbittorrent.service
```

Please change the password after logging in.

---

## Useful notes

### Watch directory

There is 1 watch directory:

1. ~/qBittorrent/watch/load - torrents placed here will be loaded but download will not start

### Completed downloads

Completed downloads are automatically moved to the `~/qBittorrent/completed` folder.
