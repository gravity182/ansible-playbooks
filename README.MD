# Useful ansible playbooks

Playbooks:

- [Ubuntu Server Set-Up](server-setup) - Sets up Ubuntu server. Configures a new user, SSH key, fail2ban, useful utils, and more
- [rTorrent](rtorrent) - installs rTorrent
- [qBittorrent](qbittorrent) - installs qBittorrent
- [WireGuard VPN](vpn) - installs WireGuard
- [wg-easy](wg-easy) - installs WireGuard using [wg-easy](https://github.com/wg-easy/wg-easy). More user-friendly variant, includes WebUI

## Necessary dependencies

Please make sure to install the Python [passlib](https://pypi.org/project/passlib/) library locally.
This library is required for those playbooks that accept passwords.

## License

[MIT](https://choosealicense.com/licenses/mit/)
