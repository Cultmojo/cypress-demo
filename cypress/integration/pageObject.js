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
    CH1_AJAX_MESSAGE_TEXTBOX = '#ajaxdiv > p';
    CH1_LOAD_AJAX_LINK = '#loadajax';
    CH1_AJAX_TEXT = 'The following text has been loaded from another page on this site. It has been loaded in an asynchronous fashion so that we can work through the AJAX section of this chapter';
    CH1_TEXT = 'I have been added with a timeout';
    CH1_LARGE_TEXTBOX_MESSAGE = 'To be used after the AJAX section of the book';
    CH1_LARGE_TEXTBOX = '#html5div';

    
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
    CH4_CLICK_TO_LOAD_BUTTON = '#selectLoad';
    CH4_DROPDOWN_BUTTON = '#ajaxLoad';
    CH4_MOUSE_OVER_THIS = '#hoverOver';
    CH4_HIGHEST_BID_TEXTBOX = '#nextBid';

    //Ch8 page elements
    CH8_CREATE_COOKIE_BUTTON = '#secondCookie';




}

export const po = new PageObject();