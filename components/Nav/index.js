import React from 'react';
import style from './index.module.scss';
import OpenIcon from '@atlaskit/icon/glyph/open';
import Icon from '@atlaskit/icon';
import {
    Footer,
    Header,
    LinkItem,
    NavigationContent,
    NavigationFooter,
    NavigationHeader,
    Section,
    SideNavigation,
} from '@atlaskit/side-navigation';
const Nav = () => {
    return (
        <div className={style.nav}>
            <SideNavigation label="project">
                <NavigationHeader>
                    <Header>ZuHot</Header>
                </NavigationHeader>
                <NavigationContent showTopScrollIndicator>
                    <Section>
                        <LinkItem href='#' iconAfter={<OpenIcon />}>Thống kê</LinkItem>
                    </Section>
                    <Section>
                        <LinkItem href="#" iconAfter={<OpenIcon />}>Khách Hàng</LinkItem>
                    </Section>
                </NavigationContent>
                <NavigationFooter>
                    <Footer
                        iconBefore={<Icon label=""  />}
                        description={
                            <div>
                                <a>Give feedback</a> {' ∙ '}
                                <a>Learn more</a>
                            </div>
                        }
                    >
                        You're in a next gen-project
                    </Footer>
                </NavigationFooter>
            </SideNavigation>
        </div>

    );
}
export default Nav;