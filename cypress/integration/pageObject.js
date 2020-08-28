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

    //Ch3 page elements

    //Ch4 page elements

    //Ch8 page elements
    CH8_CREATE_COOKIE_BUTTON = '#secondCookie';




}

export const po = new PageObject();