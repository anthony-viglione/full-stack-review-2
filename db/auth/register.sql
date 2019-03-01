INSERT into userz (
    username, password, balance, user_image
)
values (${username}, ${password}, 0, 'https://i.ytimg.com/vi/lgkkcwo4OIc/maxresdefault.jpg')

returning id, username, balance, user_image