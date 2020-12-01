import React from 'react';
import _ from 'lodash';

import {Link, classNames, withPrefix} from '../utils';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        return (
            <Link className={classNames({'button': _.get(action, 'style', null) === 'button', 'button-icon': _.get(action, 'style', null) === 'icon'})} to={withPrefix(_.get(action, 'url', null))} {...(_.get(action, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>
              {((_.get(action, 'style', null) === 'icon') && _.get(action, 'icon_class', null)) ? (<React.Fragment>
              <span className={'icon fab ' + _.get(action, 'icon_class', null)} aria-hidden="true"/><span className="screen-reader-text">{_.get(action, 'label', null)}</span>
              </React.Fragment>) : 
              _.get(action, 'label', null)
              }
            </Link>
        );
    }
}
