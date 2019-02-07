SELECT OI.UnitPrice, OI.Quantity, 
O.OrderDate, O.OrderNumber, O.TotalAmount, 
P.ProductName, P.Package, 
S.City AS 'SCity', S.CompanyName, S.ContactName, S.ContactTitle, S.Country AS 'SCountry', S.Fax, S.Phone AS 'SPhone',
C.FirstName, C.LastName, C.City, C.Country, C.Phone,
OI.Id AS 'OrderItemId', O.Id AS 'OrderId', P.Id AS 'ProductId', S.Id AS 'SupplierId', C.Id AS 'CustomerId' FROM OrderItem OI 
LEFT JOIN [Order] O ON OI.OrderId = O.Id 
LEFT JOIN Product P ON OI.ProductId = P.Id
LEFT JOIN Supplier S ON P.SupplierId = S.Id
LEFT JOIN Customer C ON O.CustomerId = C.Id
WHERE OI.OrderId = @id