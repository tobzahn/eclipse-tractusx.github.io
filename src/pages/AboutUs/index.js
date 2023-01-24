/********************************************************************************
 * Copyright (c) 2022 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 ********************************************************************************/

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutUsHeader from "../../components/AboutUsHeader";
import AboutUsContent from "../../components/AboutUsContent";

import styles from "./styles.module.css";


export default function AboutUsPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'About Us'}
      description="Description will go into a meta tag in <head />"
    >
      <AboutUsHeader />
      <main>
        <AboutUsContent />
      </main>
    </Layout>
  );
}