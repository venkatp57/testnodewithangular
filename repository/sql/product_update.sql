DECLARE @isUpdated INT
IF EXISTS(SELECT * FROM Product WHERE Id=@id)
    BEGIN
        UPDATE Product SET ProductName=@productName, SupplierId=@supplierId, UnitPrice=@unitPrice, 
        Package=@package, IsDiscontinued=@isDiscontinued WHERE Id=@id 
        SET @isUpdated = 1
    END
ELSE
    BEGIN
        SET @isUpdated = 0
    END
SELECT @isUpdated AS 'returnValue'