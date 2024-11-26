# Useful ansible playbooks

Playbooks:

- [Ubuntu Server Set-Up](server-setup) - Sets up Ubuntu server. Configures a new user, SSH key, fail2ban, useful utils, and more. This is the playbook I personally use everytime I create a new VPS
- [rTorrent](rtorrent) - Installs rTorrent
- [qBittorrent](qbittorrent) - Installs qBittorrent
- [WireGuard VPN](vpn) - Installs WireGuard VPN
- [wg-easy](wg-easy) - Installs WireGuard VPN using [wg-easy](https://github.com/wg-easy/wg-easy). More user-friendly variant, includes WebUI

## Necessary dependencies

Please make sure to install the Python [passlib](https://pypi.org/project/passlib/) library locally.
This library is required for those playbooks that accept passwords.

## License

[MIT](https://choosealicense.com/licenses/mit/)
