/**
 * Project: Quantum Web3 Agent
 * Author: Reece Dixon
 * Copyright: © 2024 Reece Dixon. All rights reserved.
 * License: This file is part of the Quantum Web3 Agent project, licensed under the GNU Affero General Public License v3.0.
 *          You should have received a copy of the GNU Affero General Public License along with this program.
 *          If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navigation = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      {navItems.map(({ title, to }) => (
        <li key={to}>
          <Link to={to} className="hover:text-gray-300">{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;