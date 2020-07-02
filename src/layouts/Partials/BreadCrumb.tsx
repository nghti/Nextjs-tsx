import { PageHeader } from 'antd';
import _ from 'lodash';
import { withRouter } from 'next/router'

import * as Styled from '@/layouts/styled';

function BreadCrumb({ router }:any) {
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Home',
    },
    {
      path: 'first',
      breadcrumbName: `${_.trim(router.pathname, '/')}`,
    },
  ];
  return (
    <div>
      {router.pathname !== '/' && (
        <Styled.AntProHeader>
          <PageHeader className="site-page-header" title="Form" breadcrumb={{ routes }}>
            <p>
              Form pages are used to collect or verify information to users, and basic forms are common in scenarios
              where there are fewer data items.
            </p>
          </PageHeader>
        </Styled.AntProHeader>
      )}
    </div>
  );
}

export default withRouter(BreadCrumb)
