(function () {
var bottomHalfBase = 'http://bottomhalf.org/prototypes/p3/bottomhalf.org"';
document.write('<div id="bottomhalf-comments">Loading Comments</div>');

var existingAuthors = {
  '4021c2acfc5b98b6dfe2d0ec26432ce1': {
    name: 'Jill',
    homepage: 'http://twitter.com/jillbo87',
    avatar: 'https://secure.gravatar.com/avatar/ae7462dcd3a895a03b70fd9bf12c8d28?s=140'
  },
  '6661c2acfc5b98b6dfe2d0ec26432ce1': {
    name: 'GrandInquisator',
    homepage: null,
    avatar: 'https://secure.gravatar.com/avatar/3021c2acfc5b98b6dfe2d0ec26432ce1?s=140'
  },
  '3132d3acfc5b98b6dfe2d0ec27443da2': {
    name: 'Sita L. Gupta Phd',
    homepage: 'http://myblog.com/',
    avatar: 'https://secure.gravatar.com/avatar/4021c2acfc5b98b6dfe2d0ec26432ce1?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    siteCreator: true
  }
};

var existingComments = [
  { user: '4021c2acfc5b98b6dfe2d0ec26432ce1',
    comment: "I agree with most of your post, except for your characterization of how kittens are cute. I feel strongly that they are playful and fluffy, more than cute, which is a demeaning term.",
    posted: "2013-02-01T21:14:51.828Z"
  },
  { user: '6661c2acfc5b98b6dfe2d0ec26432ce1',
    comment: "Great stuff Sita.",
    posted: "2013-02-01T21:16:00.828Z"
  },
  { user: '3132d3acfc5b98b6dfe2d0ec27443da2',
    comment: "Thanks Jill, I think you are reading into the term cute too much.",
    posted: "2013-02-02T09:22:00.828Z"
  },
  { user: '4021c2acfc5b98b6dfe2d0ec26432ce1',
    comment: "Okay, I'll give you that.",
    posted: "2013-02-04T19:11:11.828Z"
  }
];

var ccss = '<style>';
ccss += 'iframe { width: 100%; height: 250px; }';
ccss += '.welcomeback { position: relative; border: solid 1px grey; width: 120px; padding: 20px; margin: 0px 10px 10px; float: left;}';
ccss += '.welcomebackform { background-color: #ddd;}; form { height: 300px; }';
ccss += '.notme { margin-top: 70px }';
ccss += '.author { text-align: center; position: absolute; left: 0px; top: 0px; width: 140px; border: solid 1px grey;} ';
//ccss += '.author img {margin-left: 30px; }';
ccss += '.name { display: block; }';
ccss += '.message { position: absolute; left: 150px; height: 120px; } ';
ccss += '.comment { clear: both; border: solid 1px grey; margin-bottom: 20px; padding: 10px; position: relative; top: 0px; left: 0px; height: 120px;} ';
ccss += '.reply { position: absolute; left: 150px; bottom: 10px; } ';

ccss += '</style>';

var chtml = '<div id="bottom-half-comment-form"><h3>Comments</h3><p>There are 4 comments. Join the conversation</p>';
chtml += '<iframe src="' + bottomHalfBase + '/comment_form.html"></iframe>';
var months = ['', 'Jan', 'Feb'];

for (var i=0; i < existingComments.length; i++) {
    var c = existingComments[i];
    var d = new Date(c.posted);
    var a = existingAuthors[c.user];

    chtml += '<div class="comment"><div class="author"><img src="';
    chtml += a.avatar + '" width="60" height="60" />';
    if (a.homepage) chtml += '<a href="' + a.homepage+ '">';
    chtml += '<span class="name">' + a.name + '</span>';
    if (a.homepage) chtml += '</a>';
    chtml += '<div class="posted">on ';
    chtml += months[d.getMonth()] + ' ' + d.getDay() + 'th at ' + d.getHours() + ':' + d.getMinutes();
    chtml += '</div>';
    if (a.siteCreator) chtml += '<div class="site-creator">(Moderator)</div>';
    chtml += '</div>';
    chtml += '<div class="message">' + c.comment;
    chtml += '</div><div class="reply"><a href="#bottom-half-comment-form">Reply</a></div>';
    chtml += '</div>';
}
chtml += ccss;
$('#bottomhalf-comments').html(chtml);

})();