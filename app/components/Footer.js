'use client';
import React from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
} from '@phosphor-icons/react';
import profile from '../data/profile.json';

export const Footer = () => {
  const year = new Date().getFullYear();

  const github = profile.socialLinks?.find((s) => s.id === 'github');
  const linkedin = profile.socialLinks?.find((s) => s.id === 'linkedin');
  const mail = profile.socialLinks?.find((s) => s.id === 'mail');

  return (
    <footer className="border-t border-light-90 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 md:px-10 flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-neutral-600">
        <div className="flex flex-col gap-y-1">
          <span className="font-medium text-neutral-800">
            © {year} {profile.name}
          </span>
          <span className="text-neutral-500">
            Graduate Student, HAN Lab · Yonsei University
          </span>
        </div>

        <div className="flex items-center gap-x-4 mt-2 sm:mt-0">
          {mail && (
            <a
              href={mail.url}
              className="flex items-center gap-x-1 hover:text-main transition-colors duration-200"
            >
              <Envelope size={16} />
              <span>{profile.email}</span>
            </a>
          )}

          <div className="flex items-center gap-x-3">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-full hover:bg-light-90 transition-colors duration-200"
              >
                <GithubLogo size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="p-1 rounded-full hover:bg-light-90 transition-colors duration-200"
              >
                <LinkedinLogo size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};