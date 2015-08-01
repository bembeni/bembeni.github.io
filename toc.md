---
layout: page
title: Съдържание
permalink: /toc/
date: 2015-07-28 10:00
description: "Съдържание на първата стихосбирка на Албена Тодорова - стихотворения"
class: blog
---
{% for post in site.posts %}{% capture currentyear %}{{ post.date | date: "%Y" }}{% endcapture %}{% if currentyear != year %}{% unless forloop.first %}</ul>{% endunless %}
<ul class="unstyled-list">{% capture year %}{{ currentyear }}{% endcapture %}{% endif %}
<li class="unstyled-list"><a href="{{ post.url }}">{{ post.title }}</a></li>{% endfor %}