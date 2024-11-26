# rTorrent Playbook

What it does:

1. Installs [jesec/rTorrent](https://github.com/jesec/rtorrent) which is a more stable and performant fork of the vanilla rTorrent
2. Registers it as a system-wide systemd service using tmux under the hood

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
         ansible_user: <user> # set user for whom rTorrent should be installed
         ansible_port: 22
         ansible_ssh_private_key_file: ~/.ssh/<ssh_private_key_filename> # set SSH private key filename
```

The user you set in the `ansible_user` var will be used for installing rTorrent.

Run the playbook:

```shell
ansible-playbook -i inventory.yml --ask-become-pass rtorrent.yml
```

On the run you'll be asked for the password of the user, which is required for obtaining sudo privileges.

---

## Useful notes

### Connect to the running rTorrent

Execute the following command:

```shell
tmux attach -t rtorrent
```

### Watch directories

There are 2 watch directories:

1. ~/rtorrent/watch/load - torrents placed here will be loaded but download will not start
2. ~/rtorrent/watch/start - torrents placed here will be loaded and download will start immediately

### Completed downloads

Completed downloads automatically moved to the `~/rtorrent/completed` folder.
