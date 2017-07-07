import React from 'react'
import { render } from 'react-dom'

export function Reader() {
  return (
    <div>
      <form id="input-form" action="" method="POST" target="no-target">
        <input id="input-q1" placeholder="q1" name="q1"/>
        <button id="form-submit" onClick={submit}>SUBMIT</button>
      </form>

      <p id="input-feedback"></p>
      <iframe src="#" id="no-target" name="no-target"></iframe>
    </div>
  )
}

function submit() {
    var inputq1 = encodeURIComponent($('#input-q1').val());
    var q1ID = "entry.7";
    var baseURL = 'https://docs.google.com/forms/d/1FAIpQLSfh3SOxxmNimMqbLUIIHul0OWzx6JrLQVgr5Q-a4dekPnxJbw/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
    console.log(submitURL);
    $('#input-form')[0].action=submitURL;
    $('#input-feedback').text('Thank You!');
}
