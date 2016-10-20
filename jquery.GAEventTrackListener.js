/*
 * @summary     Google Analytics
 * @description Send to GA Event Tracker
 * @version     1.0.0
 * @file        jquery.GAEventTrackListener.js
 * @author      Mitsugi Uchikoba <uchikoba@gmail.com>
 * @contact     uchikoba@gmail.com
 *
 * @copyright   Copyright 2016 Mitsugi Uchikoba, all rights reserved.
 */
(function($) {
  $.fn.GAEventTrackListener = function () {
    $(this).each(function (idx, elm) {
      var eventCategory = $(elm).attr('ga_eventCategory');
      var eventAction = $(elm).attr('ga_eventAction');
      var eventLabel = $(elm).attr('ga_eventLabel');
      var eventValue = $(elm).attr('ga_eventValue');
      var fieldsObj = {hitType: 'event'};
      if (eventCategory) {
        fieldsObj.eventCategory = eventCategory;
      }
      if (eventAction) {
        fieldsObj.eventAction = eventAction;
      }
      if (eventLabel) {
        fieldsObj.eventLabel = eventLabel;
      }
      if (eventValue) {
        fieldsObj.eventValue = eventValue;
      }
      $(this).on('click', function () {
        ga('send', fieldsObj);
      });
    });
  };
})(jQuery)
