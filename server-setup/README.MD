# VPS Server Set-Up Playbook

What it does:

1. Upgrades all packages
2. Creates a new user with sudo privileges
3. Sets up UFW firewall which allows all outgoing connections and denies all incoming connections but SSH
4. Sets up fail2ban and pre-configures it for sshd
5. Sets up SSH keys, disables password-based and root user login
6. Installs useful utils
7. (Optional) Installs either K3s or Docker container runtime

The SSH port is changed to `2000`. This will reject most of the malicious users since they're usually trying only the standard `22` port.

## Quickstart

Prerequisites:

1. Python3 installed on the server
2. Password-based login available for the `root` user

Set up your inventory config `inventory.yml`:

```yaml
all:
  hosts:
    localhost:
      ansible_connection: local
      ansible_host: 127.0.0.1
    remotehost:
      ansible_connection: ssh
      ansible_host: <host> # set remote host (either IP or alias)
      ansible_user: root
      ansible_port: 22
```

Run the playbook:

```shell
ansible-playbook -i inventory.yml --ask-pass --ask-become-pass postinstall.yml
```

On the run you'll be asked for the SSH password and the user password. The latter may be skipped, in which case it will be defaulted to the SSH password.

This playbook is highly customizable - the playbook will ask you for the following params:

- Username and password of a new user to create
- Server's alias. It will allow handy connection via `ssh`. For example, you can type `ssh <alias>` instead of `ssh <user>@<host>`.
    This alias will also be used for the generation of a ssh key, using this pattern: `id_rsa_{{ server_alias }}@{{ username }}`
- Server's timezone
