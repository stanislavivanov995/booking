<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estates PDF</title>
</head>
<body>
    <h1>Estates PDF</h1>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($estates as $estate)
                <tr>
                    <td>{{ $estate->name }}</td>
                    <td>{{ $estate->category->name }}</td>
                    <td>{{ $estate->rating }}</td>
                    <td>{{ $estate->location }}</td>
                    <td>{{ $estate->price }} {{ $estate->currency }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>


