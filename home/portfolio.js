const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=7da767cf7b924c76b78bd4a15cc590e9';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: ' « steam »     ',
      link: '76561198855854971',
    },
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
    $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);
    $('#marquee').append(`<a href="https://ogu.gg/clarke" target="_BLANK"> « ogusers »     </a>`);
    $('#marquee').append(`<a href="https://github.com/yTax" target="_BLANK"> « github »     </a>`);
    $('#marquee').append(`<a href="https://dsc.bio/clarke" target="_BLANK"> « discord »     </a>`);
    $('#marquee').append(`<a href="https://open.spotify.com/artist/4iyvPP3oT3dM7INRbJjdoy" target="_BLANK"> « spotify »     </a>`);
