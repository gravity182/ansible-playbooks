# WireGuard VPN Set-up Playbook

What it does:

1. Sets up WireGuard VPN using [wg-easy](https://github.com/wg-easy/wg-easy)

The WebUI is accessible on the `8670` port. The port can be changed via the `webui_port` variable.

You can connect to your wg-easy instance without exposing the WebUI port publicly. Please see instructions on [Port Forwarding](../docs/PortForwarding.md).

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
         ansible_user: <user> # set user
         ansible_port: 22
         ansible_ssh_private_key_file: ~/.ssh/<ssh_private_key_filename> # set SSH private key filename
```

Run the playbook:

```shell
ansible-playbook -i inventory.yml --ask-become-pass wg-easy.yml
```

On the run you'll be asked for the password of the user, which is required for obtaining sudo privileges.
