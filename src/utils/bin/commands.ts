// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'admin' to display developer info.
`;
};

// Redirection
export const hydra = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening developer portfolio...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my project website!
More about me type:
'sumfetch' - short summary of me.
'hydra' - my developer portfolio.`;
};

export const resume = async (args: string[]): Promise<string> => {
  return 'Type hydra to visit my portfolio if you want my resume.';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const contact = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const telegram = async (args: string[]): Promise<string> => {
  window.open(`https://t.me/OmniTech_hydra`);

  return 'Opening Telegram...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const dev = async (args: string[]): Promise<string> => {
  return `This terminal was built and developed by Omnicron Hydra, do not claim to be who you are not... Be better!`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `omor
There's
literally
no
directory😂`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `omor there's no directory to show you. But you can also help support my work by donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'omni'?`;
};

export const omni = async (args?: string[]): Promise<string> => {
  return `siike😂 just use vscode.`;
};

export const opay = async (args?: string[]): Promise<string> => {
  window.open('https://opaypro.9omnitech.com', '_blank'); // ...I'm sorry
  return `here you go, here's the app's download page! `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██░ ██▓██   ██▓▓█████▄  ██▀███   ▄▄▄        ██████ 
▓██░ ██▒▒██  ██▒▒██▀ ██▌▓██ ▒ ██▒▒████▄    ▒██    ▒ 
▒██▀▀██░ ▒██ ██░░██   █▌▓██ ░▄█ ▒▒██  ▀█▄  ░ ▓██▄   
░▓█ ░██  ░ ▐██▓░░▓█▄   ▌▒██▀▀█▄  ░██▄▄▄▄██   ▒   ██▒
░▓█▒░██▓ ░ ██▒▓░░▒████▓ ░██▓ ▒██▒ ▓█   ▓██▒▒██████▒▒
 ▒ ░░▒░▒  ██▒▒▒  ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░
 ▒ ░▒░ ░▓██ ░▒░  ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░░ ░▒  ░ ░
 ░  ░░ ░▒ ▒ ░░   ░ ░  ░   ░░   ░    ░   ▒   ░  ░  ░  
 ░  ░  ░░ ░        ░       ░           ░  ░      ░  
        ░ ░      ░                                     

Type 'help' to see the list of available commands.
Type 'admin' to display developer.
Type 'hydra' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the developer portfolio.
`;
};
