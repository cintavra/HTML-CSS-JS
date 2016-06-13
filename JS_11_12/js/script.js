//slider
$(function() {
    $('.slider').slider({
        auto: true,
        cursor: true,
        speedText: 600,
        speed: 1000,
    });
});

// tmpl
$(function() {
    var html = $('#author').html();
    var about = [
        {
            avatar: '<img src="img/post.jpg" width="100%" height="100%" alt="" title="">'
        },
        {
            button: "Edit"
        },
        {
            name: 'Maxim',
            surname: 'Alexeev'
        },
        {
            from: '<a href="https://en.wikipedia.org/wiki/Kiev" target="_blank" title="My city">Kiev City</a>'
        },
        {
            title: 'Current place:',
            labeled: 'Kiev City, Ukraine'
        },
        {
            title: 'Relationship status:',
            labeled: 'Married'
        },
        {
            title: 'Company:',
            labeled: 'A-trans Group Ltd.'
        },
        {
            title: 'Website:',
            labeled: '<a href="http://a-trans.ua" title="website">a-trans.ua</a>'
        }
    ];
    var contact = [
        {
            heading: 'Contact information'
        },
	{
	    heading: 'Personal information'
	},
        {
            title: 'Phone:',
            labeled: '911'
        },
        {
            title: 'E-mail',
            labeled: 'cintavra@hotmail.com'
        },
        {
            title: 'Facebook:',
            labeled: '<a href="www.facebook.com" target="_blank" title="facebook">Facebook</a>'
        },
        {
            title: 'Twitter:',
            labeled: '<a href="https://twitter.com/max_alexeev" target="_blank" title="twitter">Twitter</a>'
        },
        {
            show: 'More info:',
	    edit: 'Edit'
        },
    ];
    var answers = [
        {
            title: 'I like:'
        },
        {
            answer: '<p><span>1.</span>Travelling around EU by VW Touran with friends or alone</p>'
        },
        {
            answer: '<p><span>2.</span>Take the guests in my house</p>'
        },
        {
            answer: '<p><span>3.</span>Design & coding</p>'
        }
    ];
    var post = [
         {
             tab: 'All tweets'
         },
         {
             tab: 'My tweets'
         },
         {
             delete: 'Delete tweet',
             pin: 'Pin tweet'
         }
     ];
    var counts = [
        {
            count: '87',
	    title: 'tweets'
        },
        {
            count: '35',
	    title: 'following'
        },
        {
            count: '14',
	    title: 'followers'
        },
        {
            count: '125',
	    title: 'likes'
        },
        {
            count: '24',
	    title: 'media'
        }
    ];
    var wall = [
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: 'Результат матчу ⚽️ #GERUKR вже відомий) #ТвояЗбірна #UA #EURO2016 #GERUKR',
            date: '21:37 - 12 июн. 2016 г.',
	    thumbed: '<img src="https://pbs.twimg.com/media/CkxWkYJW0AIW1ic.jpg">',
	    like: 'Like',
	    lCount: '1',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: 'Lin Clark - A cartoon guide to performance in #React at react-europe 2016 https://youtu.be/-t8eOoRsJ7M  с помощью @YouTube',
            date: '12:21 - 9 июн. 2016 г.',
	    thumbed: '',
	    like: 'Like',
	    lCount: '0',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            date: '23:31 - 8 июн. 2016 г.',
            text: 'Idea from Berlin #selfie',
	    thumbed: '<img src="https://pbs.twimg.com/media/CkdKYTnXIAA1TcM.jpg" alt="Selfie">',
	    like: 'Like',
	    lCount: '0',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
    ];
    var content = tmpl(html, {
        header: about,
        main: answers,
        info: contact,
        feedback: post,
	counts: counts,
	wall: wall
    });
    $('.wrapper').append(content);
})
//animation
$(function() {
    $('.page__edit__button').hide();
    $('.info__edit__button').hide();

    $('.contact__info').hover(function() {
        $('.contact__heading').css({'width': '630px'});
        $('.page__edit__button').show(200);
    }, function() {
        $('.page__edit__button').hide();
        $('.contact__heading').css({'width': '670px'});
    });

    $('.profile__info').hover(function() {
        $('.profile__heading').css({'width': '630px'});
        $('.info__edit__button').show(200);
    }, function() {
        $('.info__edit__button').hide();
        $('.profile__heading').css({'width': '670px'});
    });
//show info
    var profile = $('.profile__more__info');
    var show = profile.css('display', 'block');
    var hide = profile.css('display', 'none');
    $('#show').on('click', function(event) {
        event.preventDefault()
        if(profile.is(':visible')) {
            profile.slideUp(500) && $('#show').text('More info:');
        } else {
            profile.slideDown(500) && $('#show').text('Hide info')
        }
    });
//action menu
    $('.actions__menu__icons').mouseover(
        function(){
            $('.actions__menu').slideToggle('fast');
        }
    );
    $('.actions__menu').mouseleave(
        function(){
            $('.actions__menu').slideToggle('fast');
        }
    );
});
