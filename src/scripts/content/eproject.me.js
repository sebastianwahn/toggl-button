/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag: false*/
'use strict';

// Single task page
togglbutton.render('.single-tasks .right-side:not(.toggl)', {observe: true}, function (elem) {
  var link, description, id,
    numElem = $('.task-id', elem),
    titleElem = $('.entry-title', elem),
    projectElem = $('.project a span.label', elem),
    project = projectElem.textContent.trim();

  description = titleElem.textContent.trim();
  if (numElem !== null) {
    id = numElem.textContent;
  }

  link = togglbutton.createTimerLink({
    className: 'eproject',
    id: id,
    description: description,
    projectName: project
  });

  $('.toggl-timer').appendChild(link);
});

// Tasks listing page
togglbutton.render('.post-type-archive-tasks table.tasks-table tr:not(.toggl)', {observe: true}, function (elem) {
  var link, spanTag, projectName, description, id,
    className = 'huh',
    numElem = $('.task-id', elem),
    container = $('.times', elem),
    titleElem = $('.entry-title a span', elem);

  if (container === null) {
    return;
  }

  if ($('.entry-title a span', elem) === null) {
    return;
  }
  // This needs to be after the null check above
  description = titleElem.textContent.trim();

  projectName = '';
  if ($('.project-title a span.label')) {
    projectName = $('.project-title a span.label').textContent.trim();
  }

  if (numElem !== null) {
    id = 'Task: #' + numElem.textContent.trim();
  }

  link = togglbutton.createTimerLink({
    className: 'eproject',
    id: id,
    description: description,
    projectName: projectName,
    buttonType: 'minimal'
  });

  link.classList.add(className);

  link.addEventListener('click', function () {

    // Run through and hide all others
    var i, len, elems = document.querySelectorAll(".toggl-button");
    for (i = 0, len = elems.length; i < len; i += 1) {
      elems[i].classList.add('huh');
    }

    if (link.classList.contains(className)) {
      link.classList.remove(className);
    } else {
      link.classList.add(className);
    }
  });

  spanTag = document.createElement("span");
  spanTag.classList.add("toggl-span");
  link.style.width = 'auto';
  link.style.paddingLeft = '25px';
  link.setAttribute("title", "Toggl Timer");
  spanTag.appendChild(link);
  container.insertBefore(spanTag, container.lastChild);
});

// Home page recent tasks table
togglbutton.render('.home .table-recent-tasks tr:not(.toggl)', {observe: true}, function (elem) {
  var link, spanTag, projectName, description, id,
    className = 'huh',
    numElem = $('.task-id', elem),
    container = $('.actions', elem),
    titleElem = $('.task-title', elem);

  if (container === null) {
    return;
  }

  if ($('.task-title', elem) === null) {
    return;
  }
  // This needs to be after the null check above
  description = titleElem.textContent.trim();

  projectName = '';
  if ($('.project a span.label')) {
    projectName = $('.project a span.label').textContent.trim();
  }

  if (numElem !== null) {
    id = 'Task: #' + numElem.textContent.trim();
  }

  link = togglbutton.createTimerLink({
    className: 'eproject',
    id: id,
    description: description,
    projectName: projectName,
    buttonType: 'minimal'
  });

  link.classList.add(className);

  link.addEventListener('click', function () {

    // Run through and hide all others
    var i, len, elems = document.querySelectorAll(".toggl-button");
    for (i = 0, len = elems.length; i < len; i += 1) {
      elems[i].classList.add('huh');
    }

    if (link.classList.contains(className)) {
      link.classList.remove(className);
    } else {
      link.classList.add(className);
    }
  });

  spanTag = document.createElement("span");
  spanTag.classList.add("toggl-span");
  link.style.width = 'auto';
  link.style.float = 'right';
  link.setAttribute("title", "Toggl Timer");
  spanTag.appendChild(link);
  container.insertBefore(spanTag, container.lastChild);
});