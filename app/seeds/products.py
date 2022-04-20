from app.models import db, Product


def seed_products():
    first = Product(user_id=1,name='Biggest and best laptop ever',description='PLease buy one of these you will love them i promise',image_url='https://m.media-amazon.com/images/I/91shKLxoedL._AC_UY327_FMwebp_QL65_.jpg'
    ,price=300,category='electronics',quantity=4)
    second = Product(user_id=2,name='Very good desktop windows thingy everywhere haha',description='PLease buy one of these you will love them i promise xlarge computer',image_url='https://m.media-amazon.com/images/I/718sn7oOcfL._AC_UY327_FMwebp_QL65_.jpg'
    ,price=500,category='electronics',quantity=4)
    third= Product(user_id=3,name='Very good desktop windows thingy everywhere haha',description='I dont even know what this is but it looks cool',image_url='https://m.media-amazon.com/images/I/6109bE1DC0S._AC_UY327_FMwebp_QL65_.jpg'
    ,price=60,category='electronics',quantity=10)
    fourth = Product(user_id=3,name='Very good desktop windows thingy everywhere haha',description='Wow this one is so expensive',image_url='https://m.media-amazon.com/images/I/71A2llPqz7L._AC_UL480_FMwebp_QL65_.jpg'
    ,price=5000,category='electronics',quantity=3)


    fifth= Product(user_id=1,name='Red thingy',description='Wow looks amazing',image_url='https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png'
    ,price=6,category='fashion',quantity=5)
    fifth2= Product(user_id=1,name='Nice man clothe',description='It will keep you wamr during winter',image_url='https://m.media-amazon.com/images/I/818Tnima1yL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=100,category='fashion',quantity=4)
    fifth3= Product(user_id=2,name='Everyday tshirt',description='Something to be proud with',image_url='https://m.media-amazon.com/images/I/71G4kkPdU-L._AC_UL480_FMwebp_QL65_.jpg'
    ,price=50,category='fashion',quantity=3)
    fifth4= Product(user_id=3,name='Very nice',description='Casdadsdasaa',image_url='https://m.media-amazon.com/images/I/515d7N7uQWS._AC_UL480_FMwebp_QL65_.jpg'
    ,price=20,category='fashion',quantity=2)

    fifth5= Product(user_id=2,name='Furniture incredibleeeee',description='Furniture incredibleeeee really beyaasdasd',image_url='https://m.media-amazon.com/images/I/71-PSfCxooL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=30,category='furniture',quantity=1)
    fifth6= Product(user_id=2,name='Furniture incredibleeeee',description='Furniture incredibleeeee',image_url='https://m.media-amazon.com/images/I/61ZG-mJ6juL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=50,category='furniture',quantity=10)
    fifth7= Product(user_id=1,name='Furniture incredibleeeee',description='Furniture incredibleeeee',image_url='https://m.media-amazon.com/images/I/413vx3RglZL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=26,category='furniture',quantity=3)
    fifth8= Product(user_id=3,name='Furniture incredibleeeee',description='Furniture incredibleeeee',image_url='https://m.media-amazon.com/images/I/81zImSZ-ACL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=15,category='furniture',quantity=6)

    fifth9= Product(user_id=3,name='iM ALREADY HUNGARY',description='Are you hungry after seeing this you should be, its so good',image_url='https://m.media-amazon.com/images/I/81X1OIJiEFL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=76,category='food',quantity=2)
    fifth10= Product(user_id=1,name='iM ALREADY HUNGARY',description='Are you hungry after seeing this you should be, its so goodAre you hungry after seeing this you should be, its so good',image_url='https://m.media-amazon.com/images/I/A1dBzjL58SL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=45,category='food',quantity=1)
    fifth11= Product(user_id=2,name='iM ALREADY HUNGARY',description='Are you hungry after seeing this you should be, its so good',image_url='https://m.media-amazon.com/images/I/81gtsep2+BL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=34,category='food',quantity=7)
    fifth12= Product(user_id=2,name='iM ALREADY HUNGARY',description='Are you hungry after seeing this you should be, its so good',image_url='https://m.media-amazon.com/images/I/51PEKtJMQfL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=500,category='food',quantity=8)

    fifth13= Product(user_id=1,name='Something idk',description='I really dont know man',image_url='https://m.media-amazon.com/images/I/91yg3JBdlgL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=43,category='toys',quantity=9)
    fifth14= Product(user_id=1,name='League of legends',description='Maaan I love this game',image_url='https://m.media-amazon.com/images/I/71JWVVP3nWL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=23,category='toys',quantity=4)
    fifth15= Product(user_id=3,name='Car',description='Casdasdadasdadada',image_url='https://m.media-amazon.com/images/I/71wy2BJWFTL._AC_UL480_FMwebp_QL65_.jpg'
    ,price=5,category='toys',quantity=2)
    fifth16= Product(user_id=3,name='toy ship',description='hehehehehe nbceee',image_url='https://m.media-amazon.com/images/I/81-jHs0yp8L._AC_UL480_FMwebp_QL65_.jpg'
    ,price=1,category='toys',quantity=3)


    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(fifth16)
    db.session.add(fifth2)
    db.session.add(fifth3)
    db.session.add(fifth4)
    db.session.add(fifth5)
    db.session.add(fifth6)
    db.session.add(fifth7)
    db.session.add(fifth8)
    db.session.add(fifth9)
    db.session.add(fifth10)
    db.session.add(fifth11)
    db.session.add(fifth12)
    db.session.add(fifth13)
    db.session.add(fifth14)
    db.session.add(fifth15)


    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
