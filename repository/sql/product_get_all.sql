SELECT P.Id, 
P.ProductName, 
P.SupplierId, 
P.UnitPrice, 
P.Package,
P.IsDiscontinued, 
S.CompanyName AS 'SupplierName' 
FROM Product P INNER JOIN Supplier S ON p.SupplierId = S.Id