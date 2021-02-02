import GitHubLinks from './GitHubLinks';
import React from 'react';
import { UsaBanner } from '@cmsgov/design-system';
import path from 'path';

const Header = () => {
  return (
    <div>
      <UsaBanner />
      <header className="ds-base--inverse ds-u-padding--3 ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
        <h1 className="ds-h3 ds-u-margin-bottom--0">
          <a
            href={path.join('/', process.env.rootPath)}
            className="ds-c-link--inverse c-header__title"
            title="Home"
          >
            {process.env.name}
          </a>
        </h1>
        <GitHubLinks className="ds-u-display--none ds-u-sm-display--block" inversed />
      </header>
      {process.env.core && (
        <div className="ds-c-alert ds-c-alert--warn  ds-c-alert--hide-icon ds-u-border--0 ">
          <div className="ds-c-alert__body">
            <p className="ds-c-alert__text">
              <strong>CMS Design System v2 is released!</strong>
              &nbsp; See our{' '}
              <a href={path.join('/', process.env.rootPath, 'startup/migrating-v2/')}>
                migration guide
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
