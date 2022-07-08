/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styles from './header.module.css';

type Props = {
  hero: React.ReactNode;
  description: React.ReactNode;
};

  script(async, src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7005479426047475', crossorigin='anonymous');


export default function Header({ hero, description }: Props) {
  return (
    <>
      <h1 className={styles.hero}>{hero}</h1>
      <p className={styles.description}>{description}</p>
    </>
  );
}
