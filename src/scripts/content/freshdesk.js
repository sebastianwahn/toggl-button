/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

togglbutton.render('#Pagearea:not(.toggl)', {observe: true}, function (elem) {
  var link, container = createTag('li', 'ticket-btns'),
    //duration,
    titleElem = $('h2.subject', elem),
    idElem = $('#ticket-display-id'),
    //trackedContainer = createTag('div', 'open-box toggl-time-tracked'),
    //trackedElem = $('.open-box'),
    projectElem = $('.logo_text'),
    buttonsElem = $('.ticket-actions > ul');

  link = togglbutton.createTimerLink({
    className: 'freshdesk',
    id: idElem.textContent.trim(),
    description: titleElem.textContent.trim(),
    projectName: projectElem && projectElem.textContent.trim(),
    calculateTotal: true
  });

  container.appendChild(link);
  buttonsElem.appendChild(container, buttonsElem);
/*
  duration = togglbutton.calculateTrackedTime(description);
  h3 = document.createElement("h3");
  h3.textContent = "Time tracked";

  p = document.createElement("p");
  p.setAttribute("title", "Time tracked with Toggl: " + duration);
  p.textContent = duration;

  trackedContainer.appendChild(h3);
  trackedContainer.appendChild(p);
  trackedElem.parentNode.insertBefore(trackedContainer, trackedElem.nextSibling);
*/
});
