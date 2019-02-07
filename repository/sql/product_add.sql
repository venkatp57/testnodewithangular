INSERT INTO Product (ProductName, SupplierId, UnitPrice, Package, IsDiscontinued) 
VALUES(@productName, @supplierId, @unitPrice,@package, @isDiscontinued)

SELECT SCOPE_IDENTITY() AS 'Id'

