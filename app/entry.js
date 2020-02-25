'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';
import $ from 'jquery';
const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御力 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p><p>'
  + crypto.randomBytes(8).toString('hex') + '</p>';
  
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg');

setInterval(() => {
  $.get('/server-status', {}, (data) => {
    loadavg.text(data.loadavg.toString());
  });
}, 1000);