from app.models import db, Product


def seed_products():
    first = Product(user_id=1,name='Perfect',description='A',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=1,category='Food',quantity=2)
    second = Product(user_id=2,name='Good',description='S',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=2,category='Food',quantity=2)
    third= Product(user_id=3,name='Meh',description='D',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=3,category='Food',quantity=2)
    fourth = Product(user_id=3,name='Bad',description='B',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=4,category='Food',quantity=2)
    fifth= Product(user_id=1,name='Terrible',description='C',image_url='https://images.ctfassets.net/u0haasspfa6q/1uGsqwmSpOUN3ITzZ0akhp/7582e3072d2da76fdc3689527f808268/girl-in-the-sunset-on-some-rocks-on-the-water'
    ,price=5,category='Food',quantity=2)


    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
