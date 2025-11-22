// app/components/Nav.js
'use client';
import {
  House,
  Note,
  User,
  SquaresFour,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Envelope,
  List as ListIcon,
  X as XIcon,
} from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useActiveSection } from '../contexts/ActiceSectionContext';
import Image from 'next/image';
import profileImage from '@/public/images/profile/seungmin.JPG';
import profile from '../data/profile.json';

const navList = [
  { id: 'home', icon: House, name: 'HOME' },
  { id: 'education', icon: Note, name: 'EDUCATION' },
  { id: 'about', icon: User, name: 'ABOUT' },
  { id: 'projects', icon: SquaresFour, name: 'PROJECTS' }
];

const snsIconMap = {
  github: GithubLogo,
  mail: Envelope,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
};

export const Nav = () => {
  const { activeSection } = useActiveSection();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const snsList =
    profile.socialLinks?.map((item) => {
      const Icon = snsIconMap[item.id] ?? GithubLogo;
      const label =
        item.label ?? item.id.replace(/_/g, ' ').toUpperCase();
      return {
        ...item,
        icon: Icon,
        name: label,
      };
    }) ?? [];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // 모바일에서는 클릭 후 메뉴 닫기
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* 모바일 상단바 */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-main text-common-100 md:hidden">
        <div className="flex items-center justify-between px-4 h-[72px]">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-500">
              <Image
                src={profileImage}
                alt="ProfileImage"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 0%' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light uppercase tracking-wide">
                Portfolio
              </span>
              <span className="text-base font-semibold">
                {profile.name}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="p-2 rounded-md hover:bg-common-100 hover:bg-opacity-20 transition-colors duration-200"
          >
            {isMobileOpen ? (
              <XIcon size={24} weight="bold" />
            ) : (
              <ListIcon size={24} weight="bold" />
            )}
          </button>
        </div>

        {isMobileOpen && (
          <div className="border-t border-common-100/30 bg-main">
            <ul className="flex flex-col">
              {navList.map((nav, idx) => {
                const isActive = activeSection === nav.id;
                return (
                  <li
                    key={`m-nav-${idx}`}
                    className={`flex flex-row items-center py-3 px-4 gap-x-3 cursor-pointer ${
                      isActive
                        ? 'bg-common-100 bg-opacity-15 text-common-100'
                        : 'text-common-100 text-opacity-70'
                    }`}
                    onClick={() => handleNavClick(nav.id)}
                  >
                    <nav.icon
                      size={18}
                      weight={isActive ? 'fill' : 'regular'}
                    />
                    <span className="text-sm">{nav.name}</span>
                  </li>
                );
              })}
            </ul>
            <div className="w-full h-[1px] bg-common-100/40" />
            <ul className="flex flex-row justify-around py-3">
              {snsList.map((sns, idx) => {
                const Icon = sns.icon;
                return (
                  <li
                    key={`m-sns-${idx}`}
                    className="flex w-9 h-9 items-center justify-center rounded-full cursor-pointer hover:bg-common-100 hover:bg-opacity-25 transition-all duration-200"
                  >
                    <a href={sns.url} target="_blank" rel="noreferrer">
                      <Icon size={18} className="text-common-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* 데스크탑 사이드바 */}
      <nav className="hidden md:flex w-[260px] h-screen justify-center items-center fixed left-0 top-0 bg-main text-common-100">
        <div className="flex flex-col w-full justify-center items-center gap-y-14">
          <div className="flex w-[180px] h-[180px] bg-slate-500 rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt="ProfileImage"
              className="object-cover"
              style={{ objectPosition: 'center 0%' }}
            />
          </div>
          <div className="w-[80%]">
            <ul className="flex flex-col gap-y-2 mb-40">
              {navList.map((nav, idx) => {
                const isActive = activeSection === nav.id;
                return (
                  <li
                    key={`nav-${idx}`}
                    className={`flex flex-row items-center cursor-pointer py-4 px-4 gap-x-4 ${
                      isActive
                        ? 'text-common-100'
                        : 'text-common-100 text-opacity-60'
                    }`}
                    onClick={() => handleNavClick(nav.id)}
                  >
                    <nav.icon
                      size={20}
                      weight={isActive ? 'fill' : 'regular'}
                    />
                    <span>{nav.name}</span>
                  </li>
                );
              })}
            </ul>

            <div className="w-full h-[1px] bg-common-100" />

            <ul className="w-full flex flex-row justify-around py-10">
              {snsList.map((sns, idx) => {
                const Icon = sns.icon;
                return (
                  <li
                    key={`sns-${idx}`}
                    className="flex w-[36px] h-[36px] items-center justify-center rounded-full cursor-pointer hover:bg-common-100 hover:bg-opacity-35 transition-all duration-300"
                  >
                    <a href={sns.url} target="_blank" rel="noreferrer">
                      <Icon size={20} className="text-common-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};