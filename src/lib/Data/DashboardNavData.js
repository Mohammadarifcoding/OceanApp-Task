
import { FaShoppingBag, FaTachometerAlt } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import {  MdLibraryBooks } from 'react-icons/md';
import {  PiUserFill } from 'react-icons/pi';

export const DashboardData = [
  {
    title: 'General',
    routesData: [
      {
        route: '/dashboard',
        title: 'Dashboard',
        icon: FaTachometerAlt
      },
      {
        route: '/orders',
        title: 'Orders',
        icon: FaShoppingBag,
        underRoutes: true,
        underRoutesData: [
          {
            route: '/web-development',
            title: 'Web Development'
          },
          {
            route: '/web-development',
            title: 'Web Development'
          }
        ]
      }
    ]
  },
  {
    title: 'Management',
    routesData: [
      // student routes
      {
        route: '/dashboard/profile',
        title: 'User',
        icon: PiUserFill
      },
      {
        route: '/dashboard/notifications',
        title: 'Notifications',
        icon: IoMdNotifications
      },
      {
        route: '/dashboard/my-courses',
        title: 'My Courses',
        icon: MdLibraryBooks
      }
    ]
  }
];
