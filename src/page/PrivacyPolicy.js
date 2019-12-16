import React, { useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Paper, Typography } from '@material-ui/core';

const PrivacyPolicy = () => {
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('Privacy Policy');
  }, [setTitle]);

  return (
    <Paper style={{ padding: 15, marginTop: 10 }}>
      <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
        Privacy Policy
        <br />
        Effective Date: November 13, 2019
        <br />
        <br />
        This page is used to inform the application users regarding our policies
        with the collection, use, and disclosure of Personal Information if
        anyone decided to use our Service.
        <br />
        <br />
        If you choose to use our Service, then you agree to the collection and
        use of information in relation with this policy. The Personal
        Information that we collect are used for providing and improving the
        Service. We will not use or share your information with anyone except as
        described in this Privacy Policy.
        <br />
        <br />
        Information Collection and Use
        <br />
        <br />
        We intentionally do not collect any personal user data. But we do use
        other third-party services such as Google Admob which may collect user
        data. We don't have any features on our server that can collect user's
        personal data except for the one's that they send to use the
        application.
        <br />
        <br />
        Third party vendors, including Google, use cookies to serve ads based on
        a user's prior visits to your website or other websites.
        <br />
        Google's use of advertising cookies enables it and its partners to serve
        ads to your users based on their visit to your sites and/or other sites
        on the Internet.
        <br />
        Users may opt out of personalized advertising by visiting
        https://google.com/settings/ads
        <br />
        <br />
        Service Providers
        <br />
        <br />
        We may employ third-party companies and individuals due to the following
        reasons:
        <br />
        <br />
        To facilitate our Service;
        <br />
        To provide the Service on our behalf;
        <br />
        To perform Service-related services; or
        <br />
        To assist us in analyzing how our Service is used.
        <br />
        We want to inform our Service users that these third parties have access
        to your Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
        <br />
        <br />
        Links to Other Sites
        <br />
        <br />
        Our Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over,
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
        <br />
        <br />
        Children’s Privacy
        <br />
        <br />
        Our Services do not address anyone under the age of 13. We do not
        knowingly collect personal identifiable information from children under
        13.
        <br />
        <br />
        Changes to This Privacy Policy
        <br />
        <br />
        We may update our Privacy Policy from time to time. Thus, we advise you
        to review this page periodically for any changes. We will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately, after they are posted on this page.
        <br />
        <br />
        Contact Us
        <br />
        <br />
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us.
        <br />
        Email: khgyanendro77@gmail.com
        <br />
      </Typography>
    </Paper>
  );
};

export default PrivacyPolicy;
