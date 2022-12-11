describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/myumkm/index.php/home/#kategori')
    cy.get("a[href='http://localhost/myumkm/index.php/administrator']").click()
    cy.get("input[name='username']").type('putra05');
    cy.get("input[name='password']").type('12345');
    cy.get("button[class='btn btn-primary btn-block submit']").click()
  })
})