from app import app


def test_add():
    response = app.test_client().get(
        '/api',
    )

    assert response.status_code == 200


if __name__ == '__main__':
    test_add()
