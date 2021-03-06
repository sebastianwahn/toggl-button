/*jslint indent: 2 */
/*global $: false, document: false, location: false, togglbutton: false*/

'use strict';

togglbutton.render('.pane_header:not(.toggl)', {observe: true}, function (elem) {
  var link, titleFunc, description, id,
    projectName = $('title').textContent,
    divTag = document.createElement("div");

  titleFunc = function () {
    var titleElem = $('.selected .tab_text .title'),
      ticketNum = location.href.match(/tickets\/(\d+)/);

    if (titleElem !== null) {
      description = titleElem.textContent.trim();
    }

    if (ticketNum) {
      id = '#' + ticketNum[1].trim();
    }
    return [id, description];
  };

  link = togglbutton.createTimerLink({
    className: 'zendesk',
    id: titleFunc()[0],
    description: titleFunc()[1],
    projectName: projectName && projectName.split(' - ').shift()
  });

  divTag.appendChild(link);
  elem.insertBefore(divTag, elem.querySelector(".btn-group"));
});
