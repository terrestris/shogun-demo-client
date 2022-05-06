/*
 * SHOGun GPRO, based on https://terrestris.github.io/shogun/
 *
 * Copyright © 2022-present terrestris GmbH & Co. KG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React from 'react';
import LogoImg from '../../../resources/public/logo.png';
//import ServiceMenu from '../ServiceMenu/ServiceMenu';
import BasicNominatimSearch from '../BasicNominatimSearch';

import './MainHeader.less';

interface DefaultMainHeaderProps { }

export interface MainHeaderProps extends Partial<DefaultMainHeaderProps> { };

export const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <div className="main-header">
      <div className="item-container left-items">
        <img className="logo" src={LogoImg} />
        <div className="title">
          Geoportal Raumordnung
          <br />
          Baden-Württemberg
        </div>
      </div>
      <div className="item-container center-items">
        <BasicNominatimSearch />
      </div>
      <div className="item-container right-items">
        Servicemenü
      </div>
    </div>
  );
};

export default MainHeader;
