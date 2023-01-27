<h1 align="center">🔒 Passky Website 🔒</h1>

[![GitHub issues](https://img.shields.io/github/issues/Rabbit-Company/Passky-Website?color=blue&style=for-the-badge)](https://github.com/Rabbit-Company/Passky-Website/issues)
[![GitHub stars](https://img.shields.io/github/stars/Rabbit-Company/Passky-Website?style=for-the-badge)](https://github.com/Rabbit-Company/Passky-Website/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Rabbit-Company/Passky-Website?style=for-the-badge)](https://github.com/Rabbit-Company/Passky-Website/network)
[![GitHub license](https://img.shields.io/github/license/Rabbit-Company/Passky-Website?color=blue&style=for-the-badge)](https://github.com/Rabbit-Company/Passky-Website/blob/main/LICENSE)

### [Download from Rabbit Store](https://rabbitstore.org/?app=com.rabbit-company.passky)

## Passky Clients

   * [Website](https://github.com/Rabbit-Company/Passky-Website#installation)
   * [Browser Extension](https://github.com/Rabbit-Company/Passky-Browser-Extension#installation)
   * [Desktop Application](https://github.com/Rabbit-Company/Passky-Desktop#installation)
   * [Android Application](https://github.com/Rabbit-Company/Passky-Android#installation)

## What is Passky?

Passky is a simple, modern, lightweight, open source and secure password manager.

[![Passky - Password manager](https://img.youtube.com/vi/yrk6cHkgVA8/0.jpg)](https://www.youtube.com/watch?v=yrk6cHkgVA8 "Click to watch!")

## How Much Does it Cost?

Passky is a free, open-source password manager that simplifies your digital life. Both the free and premium plans include advanced security features such as two-factor authentication to ensure the safety and security of your sensitive data.

While the free plan allows you to store up to 100 passwords, the premium plan offers additional benefits such as the ability to store an unlimited number of passwords. [Upgrade to the premium plan](https://passky.org/pricing) to gain access to all of Passky's features and take your password security to the next level.

At Passky, we take your security seriously, and we don't compromise on safety when it comes to password management. [Sign up now](https://vault.passky.org/register) and experience the peace of mind that comes with using Passky.

## How it Works?

Passky uses a combination of advanced encryption methods to ensure the security of your data.

Passky is based on a **zero trust architecture** and uses advanced encryption methods such as **XChaCha20** and **Argon2id** to ensure the security of your sensitive data.

For sensitive data encryption, Passky uses **XChaCha20**, a state-of-the-art encryption algorithm that provides a **high level of security and performance**. This encryption method is designed to be **resistant to known-plaintext attacks and other forms of cryptanalysis**.

For master password hashing, Passky uses **Argon2id**, a password-hashing algorithm that has been recognized as the winner of multiple password-hashing competitions, such as the **[Password Hashing Competition (PHC)](https://www.password-hashing.net)** held by the community. It is designed to be **resistant to brute-force attacks**. This algorithm uses a combination of memory-hard and data-dependent techniques to make it difficult for attackers to guess your master password.

When you save your account information to Passky, **all sensitive data is fully encrypted** using **XChaCha20**. The encrypted data is then stored on Passky's servers.

When you try to access your account, Passky will prompt you to input your master password. The master password is then hashed using **Argon2id** algorithm to ensure its security. The hashed master password is then used to decrypt the sensitive data, allowing you to access your account.

In summary, **Passky uses advanced encryption methods such as XChaCha20 and Argon2id** to ensure the security of your sensitive data and master password, making it difficult for anyone to access your information without your permission.

## How Does Passky Compare to the Competition?

Feature | Passky | Bitwarden | NordPass | Dashlane | 1Password | LastPass
--- | :---: | :---: | :---: | :---: | :---: | :---: |
Premium Price | $${\color{orange}\$2/month}$$ | $${\color{green}\$0.83/month}$$ | $${\color{orange}1.99€/month}$$ | $${\color{orange}2€/month}$$ | $${\color{red}\$2.99/month}$$ | $${\color{red}2.90€/month}$$ |
Number of Passwords | $${\color{green}Unlimited}$$ | $${\color{green}Unlimited}$$ | $${\color{green}Unlimited}$$ | $${\color{green}Unlimited}$$ | $${\color{green}Unlimited}$$ | $${\color{green}Unlimited}$$
Two-factor Authentication | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$
Zero-knowledge architecture | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{green}Yes}$$
Encryption | $${\color{green}XChaCha20/Argon2id}$$ | $${\color{orange}AES-256/PBKDF2}$$ | $${\color{green}XChaCha20/Argon2id}$$ | $${\color{orange}AES-256/PBKDF2}$$ | $${\color{orange}AES-256/PBKDF2}$$ | $${\color{orange}AES-256/PBKDF2}$$
Open-Source | $${\color{green}Yes}$$ | $${\color{green}Yes}$$ | $${\color{red}No}$$ | $${\color{red}No}$$ | $${\color{red}No}$$ | $${\color{red}No}$$
Customization | $${\color{green}Yes}$$ | $${\color{red}No}$$ | $${\color{red}No}$$ | $${\color{red}No}$$ | $${\color{red}No}$$ | $${\color{red}No}$$

> Comparison data accurate as of January 25th, 2023

# Installation
> ℹ️ The Passky Website is a client-side only application and as such, it does not require any server-side code for its operation. As a result, it can be hosted for free on [Cloudflare Pages](https://pages.cloudflare.com/).
## Docker

#### Debian & Ubuntu & Raspberry Pi OS (x64 & arm64)
```yaml
# Download docker-compose.yml file from GitHub
wget https://raw.githubusercontent.com/Rabbit-Company/Passky-Website/main/docker-compose.yml
# Start the container
docker-compose up -d
```

The website for the Passky is designed to be deployed on **port 8081** by default. However, it is important to note that this can be modified to a different port as per your requirements, by editing the appropriate settings in the `docker-compose.yml` file.

## Shared Hosting

1. Create a sub-domain specifically for the Passky Website, for example, `vault.yourdomain.com`.

2. Once the sub-domain is created, a new folder should appear in the root directory, named `vault` or `vault.yourdomain.com`.

3. [Download the latest version of the Passky Website from the official GitHub repository](https://github.com/Rabbit-Company/Passky-Website/releases/latest/download/passky-website.zip) and extract it to the previously created folder.

4. Access the URL `vault.yourdomain.com` to view the newly installed Passky Website. It is recommended to verify that the website is functional and that all required components are properly configured.

> ⚠️ When deploying the Passky Website, it is essential to ensure that appropriate security measures are in place. If not utilizing Cloudflare Pages, it is recommended that all relevant [security headers](https://github.com/Rabbit-Company/Passky-Website/blob/main/website/_headers) are properly implemented to protect against potential vulnerabilities.