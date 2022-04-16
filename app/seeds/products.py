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


    fifth= Product(user_id=1,name='Terrible',description='C',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=5,category='Food',quantity=2)


    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
