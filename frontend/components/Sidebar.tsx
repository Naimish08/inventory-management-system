'use client';

import { useRouter } from 'next/navigation';
import { Package, BarChart3, Truck, Box, Clock, Settings, HelpCircle, type LucideIcon } from 'lucide-react';

interface NavItem {
    id: string;
    label: string;
    icon: LucideIcon;
    path: string;
}

interface SidebarProps {
    active: string;
}

const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
    { id: 'receipts', label: 'Receipt Operations', icon: Package, path: '/receipts' },
    { id: 'delivery', label: 'Delivery Operations', icon: Truck, path: '/delivery' },
    { id: 'stock', label: 'Stock', icon: Box, path: '/stock' },
    { id: 'history', label: 'Move History', icon: Clock, path: '/history' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ active }: SidebarProps) {
    const router = useRouter();

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">InventoryMS</span>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => router.push(item.path)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active === item.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    Help & Support
                </button>
            </div>
        </aside>
    );
}
