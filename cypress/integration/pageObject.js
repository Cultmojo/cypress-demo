/// <reference types="Cypress" />

export class PageObject {

    //Base page elements
    CHAPTER_ONE_LINK = 'body > div.mainbody > ul > li:nth-child(1) > a';
    CHAPTER_TWO_LINK = 'body > div.mainbody > ul > li:nth-child(2) > a';
    CHAPTER_THREE_LINK = 'body > div.mainbody > ul > li:nth-child(3) > a';
    CHAPTER_FOUR_LINK = 'body > div.mainbody > ul > li:nth-child(4) > a';
    CHAPTER_EIGHT_LINK = 'body > div.mainbody > ul > li:nth-child(5) > a';
    BASE_PAGE_TEXTBOX = '#q';

    //Ch1 page elements
    CH1_RADIO_BUTTON = '#radiobutton';
    CH1_DROPDOWN = '#selecttype';
    CH1_CHECKBOX = 'body > div.mainbody > p:nth-child(3) > input[type=checkbox]';
    CH1_HOME_PAGE_LINK = 'body > div.mainbody > p:nth-child(4) > a';
    CH1_ASSERT_STRING = 'Assert that this text is on the page';
    CH1_LOAD_TEXT_BUTTON = '#secondajaxbutton';
    CH1_TEXTBOX = '#secondajax';
    CH1_VERIFY_BUTTON = '#verifybutton';
    CH1_MESSAGE_TEXTBOX = '#html5div';
    CHI_TEXT = 'I have been added with a timeout';
    
    //Ch2 page elements
    CH2_INDEX_LINK = 'body > div.mainbody > div:nth-child(1) > a';
    CH2_BUTTON_WITH_NAME_BUTTON = '#divontheleft2 > input[type=button]:nth-child(1)';
    CH2_RANDOM_BUTTON = '#random';
    CH2_VERIFY_BUTTON = '#divinthecenter > input[type=button]:nth-child(1)';
    CH2_CHOCOLATE_BUTTON = '#divinthecenter > input[type=button]:nth-child(3)';
    CH2_BUTTON_WITH_ID_BUTTON = '#but1';
    CH2_SIBLING_BUTTON = '#divontheleft > input[type=button]:nth-child(3)';
    
    //Ch3 page elements
    CH3_INDEX_BUTTON = '#index';
    CH3_POOL_LABEL = 'pool';
    CH3_DATE_LABEL = Cypress.moment().format('ddd, DD, MMM, YYYY ');
    CH3_ASTROLOGY_LABEL = "Virgo Cancer Capricorn'";
    

    //Ch4 page elements
    CH4_INDEX_LINK = '';
    CH4_SELENIUM_DROPDOWN = '#selecttype';
    CH$_SELECT_SELENIUM_IDE = '#selecttype > option:nth-child(1)';
    CH4_SELECT_SELENIUM_CORE = '#selecttype > option:nth-child(2)';
    CH4_SELECT_SELENIUM_RC = '#selecttype > option:nth-child(3)';
    CH4_SELECT_SELENIUM_GRID = '#selecttype > option:nth-child(4)';
    CH4_CLICK_TO_LOAD_BUTTON = '#selectLoad';
    CH4_DROPDOWN_BUTTON = '#ajaxLoad';
    CH4_MOUSE_OVER_THIS = '#hoverOver';
    CH4_HIGHEST_BID_TEXTBOX = '#nextBid';

    //Ch8 page elements
    CH8_CREATE_COOKIE_BUTTON = '#secondCookie';




}

export const po = new PageObject();