// components
import NavbarMobileDropdownItems from './NavbarMobileDropdownItems';

// images
import iesdMenuLogo from '../../assets/logo/iesd-logo-white.svg';

function NavbarMobileMenu(props) {
  const {menuStyle} = props;
  return (
    <div
      id="navbar-mobile-menu-container"
      style={menuStyle.menuElemContainer}>

      <img className="navbar-mobile-menu-logo" src={iesdMenuLogo} />

      <div className="navbar-mobile-menu">

        {/* ABOUT, mission, goals&values, community */}
        <NavbarMobileDropdownItems
          mainItem={"ABOUT"}
          subItemList={[
            {
              href: "#mission",
              text: "MISSION",
            },
            {
              href: "#goals",
              text: "GOALS & VALUES",
            },
            {
              href: "#ourCommunity",
              text: "COMMUNITY",
            },
          ]}
        />

        {/*
               <a
          href="#"
          className="navbar-mobile-item navbar-mobile-button">
          EVENTS
        </a>
        */}

        {/* LEADERSHIP, organizers, past speakers, success stories */}
        <NavbarMobileDropdownItems
          mainItem={"LEADERSHIP"}
          subItemList={[
            {
              href: "#leadership",
              text: "ORGANIZERS",
            },
            {
              href: "#leadership",
              text: "PAST SPEAKERS",
            },
            {
              href: "#success-stories",
              text: "SUCCESS STORIES",
            },
          ]}
        />

        {/* SPONSORS, our sponsors, sponsor packet, apply to speak */}
        <NavbarMobileDropdownItems
          mainItem={"SPONSORS"}
          subItemList={[
            {
              href: "#sponsors",
              text: "OUR SPONSORS",
            },
            // {
            //   href: "#sponsor-packet",
            //   text: "SPONSOR PACKET",
            // },
            // {
            //   href: "#apply-to-speak",
            //   text: "APPLY TO SPEAK",
            // },
          ]}
        />

        <a
          href="#bloglist"
          className="navbar-mobile-item navbar-mobile-button">
          BLOG
        </a>

        <a
          href="https://meetup.iesd.com"
          className="navbar-mobile-item navbar-mobile-button">
          JOIN
        </a>
      </div>
    </div>
  );
}

export default NavbarMobileMenu;
