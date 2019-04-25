## Finsyn ServiceId

Finsyn uses service ids to identify entities throughout the service. They consist of:

- Type: the kind of the entity
- ID: unique key within the type

### ID:s for different types
| Type        | ID          |
| ----------- |-------------|
| `company`   | [VATNumber][vatnumber]|
| `security`  | [ISIN][isin]|
| `entity`    | [LEI][lei]|

### Serialization

```bash
# format
[type]_[id]

# examples
company_SE121212121201
security_SE1212121212
userfb_148932148213
```

[vatnumber]: https://en.wikipedia.org/wiki/VAT_identification_number
[isin]: https://en.wikipedia.org/wiki/International_Securities_Identification_Number
[lei]: https://en.wikipedia.org/wiki/Legal_Entity_Identifier

