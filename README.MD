# Useful ansible playbooks

Playbooks:

- [VPS Server Set-Up](server-setup) - Sets up Ubuntu VPS server. Configures a new user, unattended-upgrades, SSH key, ufw, fail2ban, useful utils, and more
- [rTorrent](rtorrent) - Installs rTorrent
- [qBittorrent](qbittorrent) - Installs qBittorrent
- [WireGuard VPN](vpn) - Installs WireGuard VPN
- [wg-easy](wg-easy) - Installs WireGuard VPN using [wg-easy](https://github.com/wg-easy/wg-easy). More user-friendly variant, includes WebUI

## Required dependencies

Please make sure to install the Python [passlib](https://pypi.org/project/passlib/) library locally.
This library is required for those playbooks that accept passwords.

## License

[MIT](https://choosealicense.com/licenses/mit/)
