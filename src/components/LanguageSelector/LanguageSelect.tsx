/*
 * Copyright (c) 2022-present terrestris GmbH & Co. KG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Select } from 'antd';
import React from 'react'

export const LanguageSelect = ( i18n: any ) => {
  const { Option } = Select;

  const onLanguageChange = (lang: string) => {
    if (i18n) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="languageSelect">
      <Select
        defaultValue={i18n?.language || 'en'}
        onChange={onLanguageChange}
      >
        <Option value="de">DE</Option>
        <Option value="en">EN</Option>
      </Select>
    </div>
  );
};

export default LanguageSelect;
