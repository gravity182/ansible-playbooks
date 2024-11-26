# WireGuard VPN Set-up Playbook

What it does:

1. Sets up WireGuard VPN

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
ansible-playbook -i inventory.yml --ask-become-pass vpn.yml
```

On the run you'll be asked for the password of the user, which is required for obtaining sudo privileges.

## Credits

Greatly inspired by the following guide - <https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-22-04>.
