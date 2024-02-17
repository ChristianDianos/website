'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import type { MembershipPayment } from './page';
import MembershipSettings from './tabs/MembershipSettings';

export const TAB_NAMES = ['Account', 'Personal Info', 'Membership', 'Notifications'] as const;
export type TabNames = (typeof TAB_NAMES)[number];

export type SettingData = { membershipPayment: MembershipPayment };
export type SettingTabProps = { settingData: SettingData };
type SettingTabComponent = ({ settingData }: SettingTabProps) => React.ReactNode;
const SETTING_TABS = {
    Account: () => <></>,
    'Personal Info': () => <></>,
    Membership: MembershipSettings,
    Notifications: () => <></>,
} as const satisfies Record<TabNames, SettingTabComponent>;

export default function Settings({ settingData }: { settingData: SettingData }) {
    const [tab, setTab] = useState<TabNames>('Membership');
    const Tab = SETTING_TABS[tab];

    return (
        <>
            <Sidebar currentTab={tab} onTabChange={(tab) => setTab(tab)} />
            <div className="flex w-full">
                <Tab settingData={settingData} />
            </div>
        </>
    );
}
