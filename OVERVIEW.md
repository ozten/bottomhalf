# 50,000 Foot View

This is the 50,000 foot overview of BottomHalf.

Website creators need a simple, cool way to add a commenting system to any webpage.

BottomHalf and Persona solve this problem. The following can be dropped into any page:

    <script src="http://bottomhalf.org/comments.js" type="text/javascript"></script>

When some visits their website, they will see a comments section at the bottom of the
webpage. They will be prompted to leave a comment, which requires signing in with Persona.
A name, avatar, and an optional website url will be collected. The user can then leave comments.

Comments are displayed in chronological order without threading. In addition to profile information, they have the formatted commment, and a date. Comment formatting is severely limited to safe and sane capabilities.

Comments will be held for moderation for new users, and automatically posted for trusted users.

Websites creators can moderate comments, once they have claimed ownership of a website. Their avatar will highlight their status as the creator of the website. They can approve and delete comments. BottomHalf will provide them with a dashboard of all comments across all their pages, for easy bulk moderation.

Commenters, the visitors to these websites, will have an easy sign in experience on the next website they visit that uses BottomHalf. They will confirm if they want to use their current identity, or sign in as a different one.

Commenters can delete a comment that they have previously created. They cannot edit or update an existing comment.

Comments will be stored "in the cloud". Commenters own the comments they've made in the past and can easily get the data. Website creators own all the comments made against their website and can easily get all of the data.

A creator or website commenter **cannot** discover data about others outside of the current website. Example: Amy comments on a Pets blog. Jill looks at all the comments Amy has made in the past, to evaluate if she is a looney. Jill cannot discover that Amy also recently commented on a Physics blog.

Be default, comments just work and their visual design picks up many of the elements of the page they are added too. For more control, the website creator can add BottomHalf specific CSS to control the look and feel. To override a limited set of other defaults (such as displaying the comments in reverse chronological order), they can define a JavaScript option before they add the <code>script</code> tag.

    <script type="text/javascript">
    var BottomHalfOptions = {reverseCron: true};
    </script>
    <script src="http://bottomhalf.org/comments.js" type="text/javascript"></script>